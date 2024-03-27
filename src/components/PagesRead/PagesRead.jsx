import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

const CustomShapeBarChart = ({ data }) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // Dynamically calculate the width and height based on the viewport size
    const width = window.innerWidth < 500 ? window.innerWidth - 20 : 1000;
    const height = window.innerWidth < 500 ? 290 : 390;

    return (
        <BarChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
        </BarChart>
    );
};

const PagesRead = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const readBooksData = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.includes('_read')) {
                readBooksData.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        setReadBooks(readBooksData);
    }, []);

    const chartData = readBooks.map(book => ({
        name: book.bookName,
        totalPages: book.totalPages
    }));

    return (
        <div className='w-full'>
            <div className="mx-auto bg-slate-200 bg-opacity-30 md:p-8 container">
                <CustomShapeBarChart data={chartData} />
            </div>
        </div>
    );
};

export default PagesRead;

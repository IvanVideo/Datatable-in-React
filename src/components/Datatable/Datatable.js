import './Datatable.css';

function Datatable(props) {

    return (
        <div className='table-conteiner'>
            <table className='table'>
                <thead>
                    {
                        props.data.length > 0
                            ? <tr>{Object.keys(props.data[0]).map((item, index) =>
                                <th className='table__head' key={index}>{item}</th>)}</tr>
                            : null
                    }
                </thead>
                <tbody>
                    {
                        props.data.length > 0
                            ? (
                                props.data.map((row, index) => <tr key={index}>
                                    {
                                        Object.values(row).map((column, index) =>
                                            <td className='table__cell' key={index}>{Object.values(column)}</td>)
                                    }
                                </tr>))
                            : null
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Datatable;
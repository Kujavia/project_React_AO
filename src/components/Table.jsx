const EditableTable = () => {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 34 },
        { id: 3, name: 'Alice Johnson', age: 25 },
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', age: '' });

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(data[index]);
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = (index) => {
        const newData = [...data];
        newData[index] = formData;
        setData(newData);
        setEditIndex(null);
    };

    const handleCancel = () => {
        setEditIndex(null);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.name
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                item.age
                            )}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <>
                                    <button onClick={() => handleSave(index)}>Сохранить</button>
                                    <button onClick={handleCancel}>Отмена</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => handleEdit(index)}>Редактировать</button>
                                    <button onClick={() => handleDelete(index)}>Удалить</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EditableTable;
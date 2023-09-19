import React from 'react';

function StudentInfoComponent(props) {
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {
                    props.student.map(element => (
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                            <td>{element.address}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default StudentInfoComponent;
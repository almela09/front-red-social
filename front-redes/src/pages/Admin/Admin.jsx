import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from "../../services/apiCalls"
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";

const Admin= ()=>{
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const token = useSelector(state => state.user.token);
    const decodificado = decodeToken(token);

    useEffect(() => {
        const fetchUsers = async () => {
            if (decodificado && decodificado.roleName === 'super_admin') {

                setIsLoading(true);
                try {
                    const fetchedUsers = await getAllUsers(token);
                    setUsers(fetchedUsers);
                    setError('');
                } catch (err) {
                    setError(err.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setError('No puedes pasar, solo para usuario SUPER ADMIN.');
            }
        };

        fetchUsers();
    }, [token, decodeToken]);
    if (isLoading) return <div>Cargando usuarios...</div>;
    if (error) return <div>Error: {error}</div>;

return(
    <div>
    <h1>Lista de Usuarios</h1>
    {users.length > 0 ? (
        <ul>
            {users.map(user => (
                <li key={user._id}>{user.username} - {user.email}</li>
            ))}
        </ul>
    ) : <p>No hay usuarios disponibles para mostrar.</p>}
</div>
);
};
export default Admin;
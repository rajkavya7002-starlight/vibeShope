import {useAuth} from '../context/AuthContext';import {useNavigate} from 'react-router-dom';
export function useRequireAuth(){const auth=useAuth(),navigate=useNavigate();return (...args)=>auth.user?args[0]?.():navigate('/login')}

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import loginClass from './css/login.module.css';
import { useNavigate } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import logo from '../../assets/logo.svg';
import Card from 'react-bootstrap/Card';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/nsso-secured/identify-particulate-2');
  };

 return (
    <>Login</>
  );
}

export default LoginForm;

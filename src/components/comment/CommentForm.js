import { useMutation } from '@apollo/client';
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { CREATE_COMMENT } from '../../graphql/mutations';
import 'react-toastify/dist/ReactToastify.css';
function CommentForm({slug}) {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [text , setText] = useState("");
    const [sendFunc , {data , loading , error}] = useMutation(CREATE_COMMENT)

    console.log(data)
    const submitForm = () =>{
    if(name && email && text){

        sendFunc({ variables : {
            name ,
            email ,
            description : text ,
            slug
            }
        }) ;
        if(data?.createComment.id){
            toast.success(' نظر شما ثبت شده و پس از تایید مدیر منتشر خواهد شد.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
        if(error){
            toast.error('مشکلی پیش آمده ، لطفا تمامی فیلد ها را بررسی کرده و دوباره ارسال کنید', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }else{
        toast.warn('لطفا تمامی فیلد ها را پر کنید', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    }

  return (
    <Grid container xs={12} sx={{
        boxShadow : "rgba(0,0,0,0.1)  0px  4px 12px" , 
        borderRadius : '8px' ,
        py : 1 ,
        mt : 5
        }}>
        <ToastContainer />
        <Grid item xs={11} m={2}>
            <Typography component='p' variant='h6' fontWeight={700} color='primary'>
                ارسال کامنت
            </Typography>
        </Grid>
        <Grid xs={12} m={2}>
            <TextField value={name} onChange={e => setName(e.target.value)} label='نام کاربری' variant='outlined' sx={{width:'100%' , marginY:1}} required/>
            <TextField value={email} onChange={e => setEmail(e.target.value)} label='ایمیل' variant='outlined' sx={{width:'100%' ,  marginY:1}}/>
            <TextField multiline minRows={4} value={text} onChange={e => setText(e.target.value)} label='متن پیام' variant='outlined' sx={{width:'100%' , marginY:1}}/>
        </Grid>
        <Grid>
            <Button onClick={submitForm} variant='contained' sx={{marginLeft:2 , marginBottom:1}}>
                ارسال
            </Button>
        </Grid>
    </Grid>
  )
}

export default CommentForm
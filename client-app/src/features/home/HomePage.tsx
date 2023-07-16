import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image, Divider } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { resolve } from 'path';

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='theme' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content={`Welcome back ${userStore.user?.displayName}`} />
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to activities!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
                            Register
                        </Button>
                        <Divider horizontal inverted>Or</Divider>
                        <Button
                            as={FacebookLogin}
                            appId='613537424204562'
                            size = 'huge'
                            inverted
                            color='facebook'
                            content='Login with FaceBook'
                            onSuccess = {(response:any) => {
                                console.log('Login success', response)
                            }}
                            onFail = {(response:any) => {
                                console.log('Login failed' , response)
                            }}
                            >
                        </Button>
                    </>

                )}
            </Container>
        </Segment>
    )
})
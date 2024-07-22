import React from 'react';
import Modal from '@mui/material/Modal';
import Image from "next/image";
import closeIcon from "@/assets/svg/close.svg";
import passwordIcon from "@/assets/svg/password.svg";
import phoneIcon from "@/assets/svg/phone.svg";
import emailIcon from "@/assets/svg/email.svg";
import {
    Container,
    Title, TextCard,
    Card,
    ButtonWrapper,
    CloseDiv,
    MessageDiv,
    CardDiv
} from './styles'

export default function ForgotPasswordModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ButtonWrapper onClick={handleOpen}>
                Forgot Password
            </ButtonWrapper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container>
                    <CloseDiv>
                        <ButtonWrapper onClick={handleClose}>
                            <Image
                                src={closeIcon}
                                width={20}
                                height={20}
                                alt="close"
                            />
                        </ButtonWrapper>
                    </CloseDiv>
                    <MessageDiv >
                        <Image
                            src={passwordIcon}
                            width={56}
                            height={56}
                            alt="password"
                        />
                        <Title>Please contact Helpdesk to reset your password.</Title>
                    </MessageDiv>
                    <CardDiv>
                        <Card>
                            <Image
                                src={phoneIcon}
                                width={32}
                                height={32}
                                alt="phone"
                            />
                            <TextCard>Extension 9000</TextCard>
                        </Card>

                        <Card>
                            <Image
                                src={emailIcon}
                                width={32}
                                height={32}
                                alt="phone"
                            />
                            <TextCard>it.helpdesk@safra.com</TextCard>
                        </Card>
                    </CardDiv>
                </Container>
            </Modal>
        </div>
    );
}

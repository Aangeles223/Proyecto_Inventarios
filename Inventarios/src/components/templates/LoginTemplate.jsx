import { supabase } from "../../index";
import { useEffect } from "react";
import { UserAuth } from "../../index";
import styled  from "styled-components";
import {Btnsave, useUsuariosStore} from "../../index";
import {useMutation} from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

export function LoginTemplate(){
    const navigate = useNavigate();
    const { insertarUsuarioAdmin } = useUsuariosStore();
    const { user } = UserAuth();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const mutationInsertUser = useMutation({
        mutationKey:["insertar usuario admin"], mutationFn:async()=>{
            const p ={
                 gmail: "pruba0@gmail.com",
                 pass: "12345678"
            }
            const dt =await insertarUsuarioAdmin(p);
            // Login automático tras registro
            if (dt) {
                const { error } = await supabase.auth.signInWithPassword({
                    email: p.gmail,
                    password: p.pass
                });
                if (!error) {
                    navigate("/");
                }
            }
        }
    });

    return (
        <Container>
            <Btnsave titulo="Crear cuenta" bgcolor="#ffffffff" funcion={mutationInsertUser.mutateAsync}/>
        </Container>
    );
}

const Container = styled.div`
height: 100vh;
`
import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/GuiChiste.png" />
                <strong>Guilherme Chisté</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu Perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}
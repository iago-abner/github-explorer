import { RepositoryItem } from "./RpositoryItem";

const repositoryName = 'Unform';

const repository = {
    name: 'List',
    description: 'Form in react',
    link: 'https://www.google.com/'
}

export function RepositoryList(){
    return (
        <section className="reposity-list">
            <h1>Lista de repositório</h1><br />
            <ul>
                <RepositoryItem repos={repository}/>
                <RepositoryItem repos={repository}/>
                <li>
                    <strong>unform</strong>
                    <p>project in react</p>
                    <a href="">acessar repositório</a>
                </li>
            </ul>
        </section>
    );
}
export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repos?.name ?? 'default'}</strong>
            <p>{props.repos.description}</p>
            <a target= '_blank' href={props.repos.link}>acessar repositório</a>
        </li>
    );
}
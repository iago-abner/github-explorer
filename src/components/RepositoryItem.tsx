interface RepositoryItemProps {
    repos: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>{props.repos?.name ?? 'default'}</strong>
            <p>{props.repos.description}</p>
            <a target= '_blank' href={props.repos.html_url}>acessar repositório</a>
        </li>
    );
}
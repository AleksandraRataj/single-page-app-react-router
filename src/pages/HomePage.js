import React from 'react';
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        author: "Katarzyna Kowalska",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Massa placerat duis ultricies lacus sed turpis tincidunt id. Leo integer malesuada nunc vel risus commodo viverra. Massa placerat duis ultricies lacus sed turpis tincidunt id. Eu scelerisque felis imperdiet proin fermentum leo vel orci. In hac habitasse platea dictumst quisque. Purus viverra accumsan in nisl. Pretium nibh ipsum consequat nisl vel. At tellus at urna condimentum mattis pellentesque id nibh. Morbi enim nunc faucibus a. Mi quis hendrerit dolor magna eget. Felis eget velit aliquet sagittis id consectetur purus. Mi sit amet mauris commodo quis.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        author: "Nataniel Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Massa placerat duis ultricies lacus sed turpis tincidunt id. Leo integer malesuada nunc vel risus commodo viverra. Massa placerat duis ultricies lacus sed turpis tincidunt id. Eu scelerisque felis imperdiet proin fermentum leo vel orci. In hac habitasse platea dictumst quisque. Purus viverra accumsan in nisl. Pretium nibh ipsum consequat nisl vel. At tellus at urna condimentum mattis pellentesque id nibh. Morbi enim nunc faucibus a. Mi quis hendrerit dolor magna eget. Felis eget velit aliquet sagittis id consectetur purus. Mi sit amet mauris commodo quis.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        author: "Wiktoria Wiśniewska",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Massa placerat duis ultricies lacus sed turpis tincidunt id. Leo integer malesuada nunc vel risus commodo viverra. Massa placerat duis ultricies lacus sed turpis tincidunt id. Eu scelerisque felis imperdiet proin fermentum leo vel orci. In hac habitasse platea dictumst quisque. Purus viverra accumsan in nisl. Pretium nibh ipsum consequat nisl vel. At tellus at urna condimentum mattis pellentesque id nibh. Morbi enim nunc faucibus a. Mi quis hendrerit dolor magna eget. Felis eget velit aliquet sagittis id consectetur purus. Mi sit amet mauris commodo quis.",
    }
];

const HomePage = () => {

    const articlesList = articles.map(article => (
        <Article key={article.id} {...article} />
    ));

    return (
        <div className="home">
            {articlesList}
        </div>
    );
}

export default HomePage;


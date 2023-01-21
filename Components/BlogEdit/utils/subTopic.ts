const subTopic = () => {
    const articleNodeList: any = document.querySelectorAll('.articles-container');

    if(articleNodeList !== null){
        const elements = [...articleNodeList];
        const topics: string[] = [];

        elements.map((article) => {
        
            const title = article.querySelector('h3').textContent;
            if (title === "SUBTITULO") {
                const content = article.querySelector('textarea').value;
                topics.push(content);
            }  
        });

        return topics;
    }
}

export { subTopic }
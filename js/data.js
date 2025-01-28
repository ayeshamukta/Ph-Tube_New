const loadData = () =>
{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response=> response.json())
    .then(data=>displayData(data.categories))
    .catch(error=>console.error())
};

loadData();

const displayData=(data)=>
{
    // console.log(data);
    const category = document.getElementById("categories");

    data.forEach(element => 
    {
        // console.log(element.category);
        // console.log(element);

        const bn = document.createElement('button');
        bn.classList= "btn";
        bn.innerText= element.category;
        


        category.appendChild(bn);
        
        
    });
    
}
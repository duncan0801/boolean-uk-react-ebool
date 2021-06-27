import {Link} from "react-router-dom"

function CategoriesPage() {
    return (
        <main>
            <section class="categories-container main-wrapper">
                <ul class="categories-container__list">
                {/* <!-- Single category --> */}
                <li>
                    {/* <!-- Use the Link component from React Router to create 
                        the anchor tags
                    --> */}
                    {/* 
                    1. Click on the link that will have the id
                    2. Take you to the product page but filtered with that category
                    3. In the product page if(id), then filter the list
                    */}
                    <Link to="/categories/1">electronics</Link>
                </li>
                {/* <!--  --> */}
                <li>
                    <Link to="/categories/2">jewelery</Link>
                </li>
                {/* <!--  --> */}
                <li>
                    <Link to="/categories/3">men's clothing</Link>
                </li>
                {/* <!--  --> */}
                <li>
                    <Link to="/categories/4">women's clothing</Link>
                </li>
                {/* <!--  --> */}
                </ul>
            </section>
            </main>
    )
}

export default CategoriesPage
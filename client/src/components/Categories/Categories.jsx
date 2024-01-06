/* eslint-disable react/prop-types */
import style from "./categories.style.module.scss";

const Categories = ({ data }) => {
    return (
        <div className={style.container}>
            <div className={style.categoriesBlock}>
                <h3>Categories</h3>

                {data?.map(({ title, count }, index) => (
                    <div key={index} className={style.elem}>
                        <p>{title}</p>
                        <p>{count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

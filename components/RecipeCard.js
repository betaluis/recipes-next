import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;
    console.log(recipe)
    return (
        <div className="card">
            <div className="featured">
                <div className="thumbnail">
                    <Image 
                        src={`https:${thumbnail.fields.file.url}`}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approxamitely { cookingTime } mins to make.</p>
                </div>
                <div className="actions">
                    <Link href={`/recipes/${slug}`}><a>Cook this</a></Link>
                </div>
            </div>
            
            <style jsx>{`
                .card {
                    transform: rotateZ(-1deg);
                }
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                }
                .info p {
                    margin: 0;
                    color: #777;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a:is(:hover) {
                    transform: translate(5px, 5px)
                }
                .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 24px;
                    text-decoration: none;
                    transition: all 200ms ease-in-out;
                }
                .thumbnail {
                    position: relative;
                    height: 500px;
                    overflow: hidden;
                }
                @media screen and (max-height: 600px) {
                    .thumbnail {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    )
}
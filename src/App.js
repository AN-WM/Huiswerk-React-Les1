import React from 'react';
import './App.css'
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonText="to the collection"
                    disabled={false}
                />

                <Button
                    buttonText="shop all bags"
                    disabled={false}
                />

                <Button
                    buttonText="pre-orders"
                    disabled={true}
                />
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bag_1}
                    name="The handy bag"
                    price="€400,-"
                />

                <Product
                    label="Best seller"
                    image={bag_2}
                    name="The stylish bag"
                    price="€200,-"
                />

                <Product
                    label="New collection"
                    image={bag_3}
                    name="The simple bag"
                    price="€300,-"
                />

                <Product
                    label="New collection"
                    image={bag_4}
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="The Brand"
                    text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos ex facilis illo pariatur quisquam saepe sed similique tempore voluptas."
                    text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos ex facilis illo pariatur quisquam saepe sed similique tempore voluptas."
                    image=''
                    alt=''
                />

                <Tile
                    title=''
                    text1=''
                    text2=''
                    image={brand}
                    alt="Brand"
                />

                <Tile
                    title=''
                    text1=''
                    text2=''
                    image={our_story}
                    alt="Our story"
                />

                <Tile
                    title="Our Story"
                    text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nesciunt porro provident saepe veritatis vitae voluptate? Amet asperiores commodi, dicta eligendi molestiae, nemo neque placeat, quibusdam quod sunt vel velit?"
                    text2=''
                    image=''
                    alt=''
                />
            </footer>
        </>
    );
}

export default App;




import Card from "../../components/card";
export default function Product() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7">
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitisLorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://cdn.automobile-propre.com/uploads/2013/08/Tesla-Model-3-18-620x349.jpg"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={1}
      />
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui?
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/04/tesla-model3-52b-680x383.jpg?resize=500,281&key=8fe3d823"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={2}
      />
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://hips.hearstapps.com/hmg-prod/images/dwburnett-pcoty-roughs-6856-1642525990.jpg?crop=1.00xw:0.666xh;0,0.144xh&resize=640:*"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={3}
      />
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://cdn.motor1.com/images/mgl/w1AKR/s1/vw-golf-7-r-abt.webp"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={4}
      />
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://images.bfmtv.com/5WFJEvvCnxpyn6uu1pCMY_oQyhY=/0x0:2048x1152/2048x0/images/Ferrari-812-Competizione-1459629.jpg"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={6}
      />
      <Card
        carName="tesla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis"
        imgURL="https://www.italpassion.fr/wp-content/uploads/2024/04/ferrari-electrique-1024x683.jpg"
        detailLink="/FrontOffice/product/list/details"
        price={300}
        id={5}
      />
    </div>
  );
}

import Card from "../../components/card";
export default function Product() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto bg-gray-950 pt-7" >
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitisLorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://cdn.automobile-propre.com/uploads/2013/08/Tesla-Model-3-18-620x349.jpg" detailLink="/" price={300}/>
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/04/tesla-model3-52b-680x383.jpg?resize=500,281&key=8fe3d823" detailLink="/" price={300}/>
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/09_18_refresh/s/gw_hura_s_02_m.jpg" detailLink="/" price={300}/>
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://cdn.motor1.com/images/mgl/w1AKR/s1/vw-golf-7-r-abt.webp" detailLink="/" price={300}/>
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://images.bfmtv.com/5WFJEvvCnxpyn6uu1pCMY_oQyhY=/0x0:2048x1152/2048x0/images/Ferrari-812-Competizione-1459629.jpg" detailLink="/" price={300}/>
      <Card carName="tesla" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quae, tempora? Sint suscipit a, sed amet eveniet laudantium modi dignissimos saepe qui? 
        Ad quibusdam labore, unde tenetur praesentium sit nisi debitis" imgURL="https://www.italpassion.fr/wp-content/uploads/2024/04/ferrari-electrique-1024x683.jpg" detailLink="/" price={300}/>
      
    </div>
  );
}

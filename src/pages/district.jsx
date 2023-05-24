import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function District() {
            



    let a=[{
        id:1,
        name:"kozhikode",
        description:"ozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond.",
        image:"https://images.indianexpress.com/2021/07/DSC_0031.jpg",
        link:"https://www.google.com/maps/place/Kozhikode,+Kerala/@11.2558347,75.810814,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba65938563d4747:0x32150641ca32ecab!8m2!3d11.2587531!4d75.78041!16zL20vMGZrYmg",
        photo:"https://www.google.com/search?client=ubuntu-sn&channel=fs&q=kozhikode+photo&tbm=isch&source=univ&fir=osJMGoFRofDPeM%252CTlraw78UmPmydM%252C_%253BbX7WwSPPlasM2M%252CgurQ1Kkrr2BVdM%252C_%253BcK_9myjGD52rbM%252CVjSbaBBrTUqRfM%252C_%253Bs5NO9OEFfUtgKM%252CTlraw78UmPmydM%252C_%253B30-2FiQ23WSRCM%252CVjSbaBBrTUqRfM%252C_%253B0rHf-CIZs0WdFM%252CpiHovrlCS1C9jM%252C_%253BC5X9iuMAedZtyM%252CDopPe2v4nPS3_M%252C_%253B4eY5h80w4Hf0JM%252CC-9VEuLbrDYREM%252C_%253BQbc4WYp7qz5ZqM%252CqBF0NHE-oxAPCM%252C_%253BpNnJRaqSJ0HhTM%252Ch6ho8ghTshxUFM%252C_%253B-RbUaO9d8HwzXM%252CtCjpnV-KPbI-jM%252C_%253BUC6WRx9yRj-eJM%252CPK-D55QmXGF2DM%252C_&usg=AI4_-kQU2TpnFqXffnUQMgimIicEVJeKbg&sa=X&ved=2ahUKEwimh82yu43_AhU67zgGHTqnAIUQjJkEegQIFRAC&biw=1292&bih=656&dpr=1"
        
    },
    {
        id:2,
        name:"wayanad",
        description:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age",
        image:"https://pbs.twimg.com/media/FB19PNGVIAAXWkY.jpg:large"
    },
    {
        id:3,
        name:"kasargod",
        description:"Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. It is the northernmost district of Kerala and is also known as Saptha Bhasha Sangama Bhoomi.",
        image:"https://pinklungi.com/wp-content/uploads/2019/12/Kasaragod-1024x683.png"
    },
    {
        id:4,
        name:"kannur",
        description:"Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore",
        image:"https://lh3.googleusercontent.com/-h-Pn19WvSAk/YBvhkHdpDGI/AAAAAAAAAE0/NGy7l8_wvSouD8ZB8OAKvGDTCDUWbg2TQCLcBGAsYHQ/s1600/1612439946159831-0.png"
    },
    {
        id:5,
        name:"malappuram",
        description:"Malappuram is a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas. The first municipality in the district formed in 1970, Malappuram serves as the administrative headquarters of Malappuram district.",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzUOfSQTFIeJxKOAF_0MEZyHTHJIusjREORbbbFWI0UHmrvzLjNIKMkUFKTmmQNoRUQY1YzfST50NHtwq_B6qkj-iV7ZPdBtJpfB3ZWWdx7-zk3HoZQfFz0x_xqwF-asr1GjTmZlEMr5nstKHQ0Zrp3Q808gCtMfa1BjA-svM-Ikx6Ohs1o2p_yE-6/s1080/IMG_20221015_112321.jpg"
    },
    {
        id:6,
        name:"palakkad",
        description:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials",
        image:"https://i.ytimg.com/vi/6eAwFTkteTI/mqdefault.jpg"
    },
    {
        id:7,
        name:"ernakulam",
        description:"Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. Simple eateries serve Keralan specialties and South Indian seafood",
        image:"https://i.ytimg.com/vi/W6S9FXR9gOc/maxresdefault.jpg"
    },
    {
        id:8,
        name:"idukki",
        description:"Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum. Farther south is the vast, curved Idukki Dam and Periyar National Park, a tiger and elephant reserve",
        image:"https://pyt-blogs.imgix.net/2020/07/Idukki009.jpg?auto=format&ixlib=php-3.3.0"
    },
    {
        id:9,
        name:"alappuzha",
        description:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event",
        image:"https://files.yappe.in/place/full/thaff-hotel-and-restaurant-937584.webp"
    },
    {
        id:10,
        name:"kottayam",
        description:"Kottayam, IPA: is a city in the Indian state of Kerala. Flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala.",
        image:"https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2021/9/30/kottayam-station.jpg"
    },
    {
        id:11,
        name:"pathanamthitta",
        description:"Pathanamthitta, is a municipality situated in the Central Travancore region in the state of Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538",
        image:"https://content.jdmagicbox.com/comp/pathanamthitta/a6/9999px468.x468.220128233251.g6a6/catalogue/cloud-city-restaurant-pathanamthitta-ho-pathanamthitta-restaurants-9t3byfz66k-250.jpg"
    },
    {
        id:12,
        name:"kollam",
        description:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation. The striped 1902 Tangasseri Lighthouse has ocean views.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMRcIqYkLHWQCOs-IC7jbuYym00IE5EkK6tli44Etjr8FIgFfPpXgGcpOzJ3aaP5TqHM_uMJZSlo&usqp=CAU&ec=48665698"
    },
    
    {
        id:13,
        name:"thrissur",
        description:"Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins",
        image:"https://keralavisiontv.com/wp-content/uploads/2022/08/IMG-20220814-WA0043-450x270.jpg"
    },{
        id:14,
        name:"thiruvananthapuram",
        description:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries",
        image:"https://i.ytimg.com/vi/E3YIfaB3TGE/maxresdefault.jpg"
    }]

   
  return (

    <div>
        <Container>
      <Row>
        {
a.map((d)=>{
return (
    <Col>

<Card style={{ width: '18rem' }}>
    <a href={d.photo }>
      <Card.Img variant="top" src={d.image} />
      </a>
      <Card.Body>
        <Card.Title>{d.name}</Card.Title>
        <Card.Text>
          {d.description}
        </Card.Text>
        <Button variant="primary" a href={d.link}>MORE</Button>
      </Card.Body>
    </Card>
    </Col>
    
)
})
        }
        
      </Row>
    </Container>
    </div>

  )
}

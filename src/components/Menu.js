/* eslint-disable */
import Card from 'react-bootstrap/Card';
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import "./Menu.css"
import Badge from 'react-bootstrap/Badge';

function BasicExample() {
  return (
    <>
      <div className='Header'><h1>SOME MENU COMBINATIONS</h1>
      <hr/></div>
      
      <div className="card-container">
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f1} />
          <Card.Body>
            <Card.Title>Non-Veg Platter I</Card.Title>
            <Card.Text>
              <ul>
                <li> BREAD(PARATHA/NAN/KULCHA/ROTI)</li>
                <li>PANEER BUTTER MASALA</li>
                <li>SPECIAL VEG CURRY</li>
                <li>FISH KABIRAJI</li>
                <li>SALAD(4 TYPES)</li>
                <li>NAVARATAN POLAO/DUM POLAO</li>
                <li>MUTTON KASA/MASALA</li>
                <li>CHATNY</li>
                <li>PAPAD</li>
                <li>SWEETS(2-TYPE)</li>
                <li>ICE-CREAM</li>
                <li>MOUTH FRESHNER</li>
                <li>PAN</li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 800
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Non-Veg Platter II</Card.Title>
            <Card.Text>
              <ul>
                <ul>
                  <li>SPRING PARATHA</li>
                  <li>NAVARATAN KORMA</li>
                  <li>FISH BUTTER FRY</li>
                  <li>SALAD</li>
                  <li>MUTTON BIRIYANI</li>
                  <li>CHICKEN CHAAP</li>
                  <li>CHATNY</li>
                  <li>PAPAD</li>
                  <li>BAKED RASOGOLLA</li>
                  <li>ASSORTED SANDESH</li>
                  <li>ICE-CREAM</li>
                  <li>PAN</li>
                </ul>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 870
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f3} />
          <Card.Body>
            <Card.Title>Non-Veg Platter II</Card.Title>
            <Card.Text>
              <ul>
                <ul>
                  <li>BREAD(PARATHA/NAN/KULCHA/ROTI)</li>
                  <li>CHANA KIMA(DAL ANY TYPE)</li>
                  <li>DIAMOND FISH FRY</li>
                  <li>SALAD(4 TYPE)</li>
                  <li>RICE</li>
                  <li>FISH CURRY</li>
                  <li>CHICKEN KASA</li>
                  <li>CHATNY</li>
                  <li>PAPAD</li>
                  <li>SWEETS</li>
                  <li>ICE-CREAM</li>
                </ul>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 650
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f4} />
          <Card.Body>
            <Card.Title>Veg Platter I</Card.Title>
            <Card.Text>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 800
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Veg Platter I</Card.Title>
            <Card.Text>
              <ul>
                <li>DERADOON RICE</li>
                <li>DAL MAKHANI/DAL WITH FISH HEAD</li>
                <li>BEGUNI/POTATO-FRY</li>
                <li>FISH KALIA</li>
                <li>PABDA JHAL</li>
                <li>CHATNY</li>
                <li>PAPAD</li>
                <li>SWEETS(2-TYPES)</li>
                <li>DAHI</li>
                <li>PAN</li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 525
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Veg Platter II</Card.Title>
            <Card.Text>
              <ul>
                <li>RADHABALABI/KACHORI</li>
                <li>ALOOR DUM</li>
                <li>NAVARATAN KORMA</li>
                <li>POLAO</li>
                <li>CHANAR DAL</li>
                <li>CHATNY</li>
                <li>PAPAD</li>
                <li>RAJ BHOG</li>
                <li>SANDESH</li>
                <li>ICE-CREAM</li>
                <li>PAN</li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 350
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Veg Platter I</Card.Title>
            <Card.Text>
              <ul>
                <li>PANEER PASINDA</li>
                <li>DUM POLAO</li>
                <li>ALOOR DUM</li>
                <li>NAVARATAN KORMA</li>
                <li>CHATNY</li>
                <li>RAJ BHOG</li>
                <li>SANDESH</li>
                <li>PAN</li>
                <li>MOUTH FRESHNER</li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 350
              </Badge>
            </div>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '25rem' }}>
          <Card.Img className="card-img" variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Veg Platter I</Card.Title>
            <Card.Text>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Card.Text>
            <div className="center-badge">
              <Badge bg="dark" className="large-badge">
                PRICE Rs. 800
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className='Header'><h1>INDIVIDUAL MENU ITEMS</h1></div>
      <div className='smenu'>
      
      <hr />
      <div className='Menu'>
        <h2>WELCOME DRINKS</h2>
        <ul class="list">
          <li>Virgin mojito</li>
          <li>Virgin pina colada</li>
          <li>Fruit punch</li>
          <li>Mint cooler</li>
          <li>Pineapple juice</li>
          <li>Orange juice</li>
          <li>Orange blossom</li>
          <li>Chocolate Grasshopper Mocha Mocktail</li>
        </ul >
        <h2>CHAT</h2>
        <ul class="list">
          <li>Fuchka</li>
          <li>Dahi vada</li>
          <li>Papri chat</li>
          <li>Bhelpuri</li>
        </ul>
        <h2>VEG STARTERS</h2>
        <ul class="list">
          <li>Paneer tikka</li>
          <li>Paneer sashlik</li>
          <li>Veg Pakora</li>
          <li>Soya bean kebab</li>
          <li>Crispy baby corn</li>
          <li>Veg cutlet</li>
          <li>Cheese ball</li>
          <li>Fried Veg-momo</li>
        </ul>
        <h2>NON-VEG STARTERS</h2>
        <ul class="list">
          <li>Reshmi kebab</li>
          <li>Hariyali Kebab</li>
          <li>Chicken tikka</li>
          <li>Fried chicken</li>
          <li>Chicken pakora</li>
          <li>Chicken sashlik</li>
          <li>Chicken lollipop</li>
          <li>Fish orly</li>
          <li>Fish/chicken ball</li>
          <li>Small fish finger</li>
          <li>Fried Non Veg-momo</li>
        </ul>
        <h2>VEG SOUP</h2>
        <ul class="list">
          <li>Sweet corn soup</li>
          <li>Tomato Soup</li>
        </ul >
        <h2>NON-VEG SOUP</h2>
        <ul class="list">
          <li>Clear chicken</li>
          <li>Chicken Corn</li>
        </ul>
        <h2>VEG-SALAD</h2>
        <ul class="list">
          <li>Green salad</li>
          <li>Top salad</li>
          <li>Russian Salad</li>
          <li>Fruit salad</li>
          <li>Fruit custard salad</li>
          <li>Raita</li>
        </ul>
        <h2>VEG PREPARATIONS</h2>
        <ul class="list">
          <li>Paneer masala</li>
          <li>Paneer butter masala</li>
          <li>Palang paneer</li>
          <li>Paneer do pyaza</li>
          <li>Sahi paneer</li>
          <li>Paneer capsicum</li>
          <li>Paneer two in one</li>
          <li>Matar paneer</li>
          <li>Chilli Paneer</li>
          <li>Channar kopta kari</li>
          <li>Malai kopta curry</li>
          <li>Nargis Kopta Curry</li>
          <li>Navaratan Korma</li>
          <li>Potol dorma</li>
          <li>Dhokar Dalna</li>
          <li>Kashmiri Alurdum</li>
          <li>Stuffed Alurdum</li>
          <li>Kasa Alurdum</li>
          <li>Madrasi Alurdum</li>
          <li>Cauliflower roast</li>
          <li>Cauliflower curry</li>
          <li>Cauliflower malai curry</li>
          <li>Chili potato</li>
          <li>Echor kofta curry</li>
          <li>Veg Manchurian</li>
        </ul>
        <h2>RICE</h2>
        <ul class="list">
          <li>Plain rice</li>
          <li>Jeera rice</li>
          <li>Veg Fried rice</li>
          <li>Chinese fried rice</li>
          <li>Mixed fried rice (non-veg)</li>
          <li>Pulao</li>
          <li>Novoroton pulao</li>
          <li>Yanki pulao</li>
          <li>Dom pulao</li>
          <li>Green pea pulao</li>
          <li>Zafrani pulao</li>
          <li>Mutton Biriyani</li>
          <li>Chicken Biriyani</li>
          <li>Egg biriyani</li>
          <li>Veg biriyani</li>
          <li>Special Biriyani</li>
        </ul>
        <h2>DAL</h2>
        <ul class="list">
          <li>Channa masala</li>
          <li>Torka</li>
          <li>Egg Torka/Keema Torka</li>
          <li>Dal fry</li>
          <li>Cholar dal</li>
          <li>Dal makhani</li>
          <li>Mug Mohini Dal</li>
          <li>Mug dal with fish head</li>
          <li>Mixed veg with fish head</li>
          <li>Dal hariyali</li>
          <li>Dal Aroma Special</li>
        </ul>
        <h2>BREAD</h2>
        <ul class="list">
          <li>Radhabalabi</li>
          <li>Lacha paratha</li>
          <li>Badsahi paratha</li>
          <li>Nan</li>
          <li>Baby nan</li>
          <li>Butter nan</li>
          <li>kulcha</li>
          <li>Stuffed kulcha</li>
          <li>Tandori roti</li>
          <li>Methi paratha</li>
          <li>Roomali roti</li>
          <li>Puri</li>
          <li>Matar kachori</li>
          <li>Hing kachori</li>
          <li>Puran poli</li>
          <li>Bhatura</li>
        </ul>
        <h2>CHICKEN MENU</h2>
        <h4>Curry</h4>
        <ul class="list">
          <li>Chicken Curry</li>
          <li>Chicken Kasa</li>
          <li>Butter Chicken</li>
          <li>Chicken Masala</li>
          <li>Butter Garlic Chicken</li>
          <li>Chicken Jalfrezi</li>
          <li>Chicken Korma</li>
          <li>Chicken Kebab Masala</li>
          <li>Kadai Chicken</li>
          <li>Malai Chicken</li>
          <li>Chicken Achari</li>
          <li>Methi Chicken</li>
          <li>Murg Makhanee</li>
          <li>Chicken Rogan Josh</li>
          <li>Chicken Tikka Masala</li>
          <li>Murgh Masala</li>
          <li>Chicken Bhuna</li>
          <li>Drumstick Chicken Butter Masala</li>
          <li>Dhania Chicken</li>
          <li>Chicken Rezala</li>
          <li>Chicken Chap</li>
          <li>Chilli Chicken</li>
          <li>Chicken Dopiaza</li>
          <li>Badshahi Murg Masala</li>
          <li>Chicken Bagdadi</li>
          <li>Chicken Sahi korma</li>
          <li>Chicken Manchurian</li>
          <li>Chicken Bharta</li>
          <li>Tandoori Chicken Masala (Drumstick Only)</li>
          <li>Chicken Reshmi Butter Masala (Boneless)</li>
        </ul>
        <h2>Fried Chicken Menu</h2>
        <ul class="list">
          <li>Tandoori Chicken (Drumstick Only)</li>
          <li>Reshmi Kebab</li>
          <li>Hariyali Kebab</li>
          <li>Chicken Tikka</li>
          <li>Fried Chicken</li>
          <li>Chicken Pakora</li>
          <li>Chicken Sashlik</li>
          <li>Chicken Lollipop</li>
        </ul>
        <h2>Fish Menu</h2>
        <h4>Fried Fish</h4>
        <ul class="list">
          <li>Masala Fish Fried</li>
          <li>Fish Ball</li>
          <li>Fish Finger</li>
          <li>Fish Tikka</li>
          <li>Fish Fry</li>
          <li>Fish Saslik</li>
          <li>Fish Tandoori</li>
          <li>Prawn Tandoori</li>
          <li>Prawn Golden Fry</li>
          <li>Prawn Pakoda</li>
          <li>Fish Munia</li>
          <li>Diamond Fish Fry</li>
          <li>Fish Orly</li>
          <li>Fish Kabiraji</li>
          <li>Butter Fish Fry</li>
          <li>Fish Roll</li>
        </ul>
        <h4>Curried Fish</h4>
        <ul class="list">
          <li>Hariyali Fish</li>
          <li>Fish Amritsari</li>
          <li>Fish Malai</li>
          <li>Fish Do Pyaza</li>
          <li>Fish Manchurian</li>
          <li>Pabda Jhal</li>
          <li>Goan Fish Curry (Pomfret)</li>
          <li>Katla / Rui Kalia</li>
          <li>Doi Katla / Rui</li>
          <li>Goan Fish Curry (Pomfret)</li>
          <li>Aroma Special Fish (Fish Sandy)</li>
        </ul>
        <h2>Mutton Menu</h2>
        <ul class="list">
          <li>Mutton Kasa</li>
          <li>Mutton Masala</li>
          <li>Mutton Bhuna</li>
          <li>Mutton Do Pyaza</li>
          <li>Mutton Rezala</li>
          <li>Mutton Chaap</li>
          <li>Mutton Rogan Josh</li>
          <li>Mutton Banjara</li>
          <li>Mutton Chilli</li>
        </ul>
        <h2>SWEETS</h2>
        <ul class="list">
          <li>Hot Gulab Jamun</li>
          <li>Malpua</li>
          <li>Baked Gulab jamun</li>
          <li>Baked Rassgulla</li>
          <li>Rassgulla</li>
          <li>Baked Mihidana</li>
          <li>Mihidana</li>
          <li>Rasmalal</li>
          <li>Gajar ka Halwa</li>
          <li>Rabri</li>
          <li>Sweet curd(doi)</li>
          <li>Assorted Sandesh</li>
          <li>Different kind of Bengali sweets</li>
        </ul>
        <h2>ICE CREAM</h2>
        <ul class="list">
          <li>Vanilla</li>
          <li>Butterscotch</li>
          <li>Chocolate</li>
          <li>Two in one</li>
          <li>Strawberry</li>
          <li>Mango</li>
          <li>Ice cream with various sauce(chocolate/orange)+ mixed fruits</li>
        </ul>
        <h2>PAPAD</h2>
        <ul class="list">
          <li>Masala Papad</li>
          <li>Saboo Papad</li>
          <li>Moong Dal Papad</li>
          <li>Alu Papad</li>
        </ul>
        <h2>CHATNY</h2>
        <ul class="list">
          <li>Mixed Chatny</li>
          <li>Pineapple Chatny</li>
          <li>Mango Chatny</li>
          <li>Fruit Chatny</li>
          <li>Orange Chatny</li>
        </ul>
      </div>
      </div>

    </>
  );
}

export default BasicExample;
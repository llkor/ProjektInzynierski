const express = require("express");
const nodeCron = require("node-cron");
const { Op } = require("sequelize");
const cors = require("cors");
const { fiszki } = require("./app/models");
const db = require("./app/models");
const Role = db.role;
const Set = db.set;
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force:false}).then(() => { 
  console.log('Drop and Resync Db');
 // initial()
  //createSuperstudysets()
});


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/set.routes')(app);
require('./app/routes/image.upload.routes')(app);
require('./app/routes/class.routes')(app);
require('./app/routes/superstudyset.routes')(app);
require('./app/routes/study.routes')(app);
require('./app/routes/not.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "teacher"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
function createSuperstudysets(){
  Set.create({
    name: "Animals",
    subject: "Język angielski",
    level: "Szkoła podstawowa",
    points: 40
  }).then(data => {
    fiszki.create({
      first_side: "lew",
      second_side: "lion",
      setId: 1//data.id
    }),
    fiszki.create({
      first_side: "słoń",
      second_side: "elephant",
      setId: data.id
    }),
    fiszki.create({
      first_side: "kot",
      second_side: "cat",
      setId: 1//data.id
    }),
    fiszki.create({
      first_side: "pies",
      second_side: "dog",
      setId: 1//data.id
    }),
    fiszki.create({
      first_side: "małpa",
      second_side: "monkey",
      setId: 1//data.id
    }),
    fiszki.create({
      first_side: "orzeł",
      second_side: "eagle",
      setId: 1//data.id
    }),
    fiszki.create({
      first_side: "ptak",
      second_side: "bird",
      setId: 1//data.id
    })
    
  }),
  Set.create({
    name: "Colors",
    subject: "Język angielski",
    level: "Szkoła podstawowa",
    points: 20
  }).then(data=>{
    fiszki.create({
      first_side: "różowy",
      second_side: "pink",
      setId: 2//data.id
    }),
    fiszki.create({
      first_side: "czerwony",
      second_side: "red",
      setId: 2//data.id
    }),
    fiszki.create({
      first_side: "zielony",
      second_side: "green",
      setId: 2//data.id
    }),
    fiszki.create({
      first_side: "fioletowy",
      second_side: "purple",
      setId: 2//data.id
    }),
    fiszki.create({
      first_side: "czarny",
      second_side: "black",
      setId: 2//data.id
    }),
    fiszki.create({
      first_side: "biały",
      second_side: "white",
      setId: 2//data.id
    })
  }),
  Set.create({
    name: "Characters",
    subject: "Język angielski",
    level: "Szkoła podstawowa",
    points: 70
  }).then(data=>{
    fiszki.create({
      first_side: "miły",
      second_side: "nice",
      setId: 3//data.id
    }),
    fiszki.create({
      first_side: "niefrasobliwy",
      second_side: "easy-going",
      setId: 3//data.id
    }),
    fiszki.create({
      first_side: "towarzyski",
      second_side: "out-going",
      setId: 3//data.id
    }),
    fiszki.create({
      first_side: "radosny",
      second_side: "cheerful",
      setId: 3//data.id
    })
  }),
      Set.create({
          name: "Fruits",
          subject: "Język angielski",
          level: "Szkoła podstawowa",
          points: 40
      }).then(data => {
          fiszki.create({
              first_side: "jabłko",
              second_side: "apple",
              setId: 4//data.id
          }),
              fiszki.create({
                  first_side: "morela",
                  second_side: "apricot",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "awokado",
                  second_side: "avocado",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "banan",
                  second_side: "banana",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "jeżyna",
                  second_side: "blackberry",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "czarna porzeczka",
                  second_side: "black currant",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "borówka",
                  second_side: "blueberry",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "wiśnia",
                  second_side: "cherry",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "kokos",
                  second_side: "coconut",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "gruszka",
                  second_side: "pear",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "cytryna",
                  second_side: "lemon",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "ananas",
                  second_side: "pineapple",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "pigwa",
                  second_side: "quince",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "arbuz",
                  second_side: "watermelon",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "śliwka",
                  second_side: "plum",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "granat",
                  second_side: "pomegranate",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "truskawka",
                  second_side: "strawberry",
                  setId: 4//data.id
              }),
              fiszki.create({
                  first_side: "malina",
                  second_side: "raspberry",
                  setId: 4//data.id
              })
      }),
      Set.create({
          name: "Furniture",
          subject: "Język angielski",
          level: "Szkoła podstawowa",
          points: 60
      }).then(data => {
          fiszki.create({
              first_side: "biurko",
              second_side: "desk",
              setId: 5//data.id
          }),
              fiszki.create({
                  first_side: "dom",
                  second_side: "house",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "czajnik",
                  second_side: "kettle",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "dywan",
                  second_side: "carpet",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "fotel",
                  second_side: "armchair",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "kominek",
                  second_side: "fireplace",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "kuchenka",
                  second_side: "cooker",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "lodówka",
                  second_side: "fridge",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "lustro",
                  second_side: "mirror",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "łóżko",
                  second_side: "bed",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "mikrofalówka",
                  second_side: "microwave",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "piekarnik",
                  second_side: "oven",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "poduszka",
                  second_side: "pillow",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "półka",
                  second_side: "shelf",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "prysznic",
                  second_side: "shower",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "pralka",
                  second_side: "washing machine",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "stół",
                  second_side: "table",
                  setId: 5//data.id
              }),
              fiszki.create({
                  first_side: "szafa",
                  second_side: "wardrobe",
                  setId: 5//data.id
              })
      }),
    Set.create({
        name: "Stolice Europy",
        subject: "Geografia",
        level: "Szkoła średnia",
        points: 50
    }).then(data => {
        fiszki.create({
            first_side: "Albania",
            second_side: "Tirana",
            setId: 6//data.id
        }),
            fiszki.create({
                first_side: "Andora",
                second_side: "Andora",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Austria",
                second_side: "Wiedeń",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Belgia",
                second_side: "Bruksela",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Bułgaria",
                second_side: "Sofia",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Chorwacja",
                second_side: "Zagrzeb",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Czarnogoria",
                second_side: "Podgorica",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Czechy",
                second_side: "Praga",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Dania",
                second_side: "Kopenhaga",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Estonia",
                second_side: "Tallin",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Finlandia",
                second_side: "Helsinki",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Francja",
                second_side: "Paryż",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Grecja",
                second_side: "Ateny",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Hiszpania",
                second_side: "Madryt",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Islandia",
                second_side: "Rejkiawik",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Litwa",
                second_side: "Wilno",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Mołdawia",
                second_side: "Kiszyniów",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Monako",
                second_side: "Monaco",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Niemcy",
                second_side: "Berlin",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Norwegia",
                second_side: "Oslo",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Polska",
                second_side: "Warszawa",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Serbia",
                second_side: "Belgrad",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Słowenia",
                second_side: "Lublana",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Słowacja",
                second_side: "Bratysława",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Ukraina",
                second_side: "Kijów",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Węgry",
                second_side: "Budapeszt",
                setId: 6//data.id
            }),
            fiszki.create({
                first_side: "Włochy",
                second_side: "Rzym",
                setId: 6//data.id
            })
    }),
      Set.create({
          name: "Symbole pierwiastków",
          subject: "Chemia",
          level: "Szkoła średnia",
          points: 60
      }).then(data => {
          fiszki.create({
              first_side: "Hydrogenium",
              second_side: "Wodór",
              setId: 7//data.id
          }),
              fiszki.create({
                  first_side: "Carbonium",
                  second_side: "Węgiel",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Silicium",
                  second_side: "Krzem",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Nitrogenium",
                  second_side: "Azot",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Phosphorus",
                  second_side: "Fosfor",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Magnesium",
                  second_side: "Magnez",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Zincum",
                  second_side: "Cynk",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Ferrum",
                  second_side: "Żelazo",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Plumbum",
                  second_side: "Ołów",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Cuprum",
                  second_side: "Miedź",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Argentum",
                  second_side: "Srebro",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Aurum",
                  second_side: "Złoto",
                  setId: 7//data.id
              }),
              fiszki.create({
                  first_side: "Natrium",
                  second_side: "Sód",
                  setId: 7//data.id
              })
      })
}
async function check_date(){
  const class_task = db.class_task;
  console.log(new Date().toLocaleDateString())
  class_task.destroy({where:{ finishDate :  {[Op.lte]:new Date()}}}).then(info=>{
      console.log("usunięto")
  })
}
const job = nodeCron.schedule("00 00 00 * * *", check_date)
check_date()

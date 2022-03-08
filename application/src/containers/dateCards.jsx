import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import img01 from "../assets/pictures/CardImages/img01.jpg";
import img02 from "../assets/pictures/CardImages/img02.jpg";
import img03 from "../assets/pictures/CardImages/img03.jpg";
import img04 from "../assets/pictures/CardImages/img04.jpg";
import img05 from "../assets/pictures/CardImages/img05.jpg";
import img06 from "../assets/pictures/CardImages/img06.jpg";
import img07 from "../assets/pictures/CardImages/img07.jpg";
import img08 from "../assets/pictures/CardImages/img08.jpg";
import img09 from "../assets/pictures/CardImages/img09.jpg";
import fireRedImgUrl from "../assets/pictures/MoreImages/firered_og.svg";
import airJordan1ImgUrl from "../assets/pictures/MoreImages/air_jordan_1.svg";

const gridStyles = makeStyles((theme) => ({
  cardsContainer: {
    paddingTop: theme.spacing(3),
  },
  April: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3)
  },

  card1: {
    height: 755,
  },

  media1: {
    height: 350,
    backgroundImage: `url(${img01})`,
  },

  card1h: {
    fontFamily: 'Arimo',
    fontSize: '20px',
    fontWeight: "bold",
    textAlign: "left",
  },

  card1p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  card2: {
    height: 755,
  },

  media2: {
    height: 350,
    backgroundImage: `url(${img02})`,
  },

  card2h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card2p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  media3: {
    height: 350,
    backgroundImage: `url(${img03})`,
  },

  card3: {
    height: 755,
  },

  card3h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card3p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  May: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },

  media4: {
    height: 350,
    backgroundImage: `url(${img04})`,
  },

  card4: {
    height: 755,
  },

  card4h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card4p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  media5: {
    height: 350,
    backgroundImage: `url(${img05})`,
  },

  card5: {
    height: 755,
  },

  card5h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card5p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  media6: {
    height: 350,
    backgroundImage: `url(${img06})`,
  },

  card6: {
    height: 755,
  },

  card6h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card6p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  June: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },

  media7: {
    height: 350,
    backgroundImage: `url(${img07})`,
  },

  card7: {
    height: 755,
  },

  card7h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card7p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  media8: {
    height: 350,
    backgroundImage: `url(${img08})`,
  },

  card8: {
    height: 755,
  },

  card8h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card8p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  media9: {
    height: 350,
    backgroundImage: `url(${img09})`,
  },

  card9: {
    height: 755,
  },

  card9h: {
    fontFamily: 'Arimo',
    fontWeight: "bold",
    textAlign: "left",
  },

  card9p: {
    fontFamily: 'Arimo',
    textAlign: "left",
  },

  Soon: {
    fontWeight: 500,
    textAlign: "center",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(30),
  },

  price1: {
    fontFamily: 'Arimo',
    fontStyle: 'italic',
    fontWeight: "bold",
    fontSize: '20px',
    paddingBottom: '10px',
  },

  StoreS: {
    fontFamily: 'Arimo',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: '20px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },

  storebutton: {
    fontFamily: 'Arimo',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationColor: 'none',
    textDecoration: 'none',
  },

}));

const FireRedImg = styled.img`
  width: 200px;
  object-fit: contain;
`;

const ShoeContainer = styled.div`
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  padding: 20px 20px 20px 20px;
  text-align: center;
  border-radius: 40px;
  display: block;
  background-color: #B03A2E;
`;

const Jordan1Img = styled.img`
  width: 190px;
  height: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Shoe2Container = styled.div`
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  border-radius: 40px;
  display: block;
  background-color: #148F77;
`;

export function DateCards(props) {

  const classes = gridStyles();

    return (
      <Container maxWidth="lg" className={classes.cardsContainer}>
        <Typography variant="h4" className={classes.April}>
          April
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card1}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>10</div>
                <div>
                <CardMedia 
                className={classes.media1}
                />
                </div>
                <CardContent>
                  <Typography className={classes.card1h} gutterBottom variant="h6" component="h2">
                    Jordan 5 Retro Raging Bulls Red
                  </Typography>
                  <div className={classes.price1}>
                  $238
                  </div>
                  <Typography className={classes.card1p} variant="body2" color="textSecondary" component="p">
                    The Air Jordan 5 Raging Bulls is a suede lover's dream, bringing back the same look
                    and feel from ther 2009 version. The upper is composed entirely out of red suede, celebrating
                    MJ's tenure with the Chicago Bulls.
                  </Typography>
                </CardContent>
              </CardActionArea>
                <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/air-jordan-5-retro-raging-bulls-red-2021" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.footlocker.ca/en/product/jordan-retro-5-mens/41047094.html" style={{textDecoration: 'none'}}>  
                  <Button >
                    Foot Locker
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card2}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>17</div>
                <div>
                <CardMedia 
                className={classes.media2}
                />
                </div>
                <CardContent>
                  <Typography className={classes.card2h} gutterBottom variant="h6" component="h2">
                    Jordan 1 Retro Hyper Royal
                  </Typography>
                  <div className={classes.price1}>
                  $230
                  </div>
                  <Typography className={classes.card2p} variant="body2" color="textSecondary" component="p">
                    The Air Jordan 1 High Hyper Royal is a breezy coloryway of Michael Jordan's first signature shoe
                    that was released by Jordan Brand for its Spring/Summer 2021 collection. Color palette that jives in warm tones.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                  <a href="https://stockx.com/air-jordan-1-retro-high-hyper-royal-smoke-grey" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                  <a href="https://www.goat.com/sneakers/air-jordan-1-retro-high-og-hyper-royal-555088-402" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card3}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>22</div>
                <div>
                <CardMedia 
                className={classes.media3}
                />
                </div>
                <CardContent>
                  <Typography className={classes.card3h} gutterBottom variant="h6" component="h2">
                    Space Hippie 01 Obsidian
                  </Typography>
                  <div className={classes.price1}>
                  $219
                  </div>
                  <Typography className={classes.card3p} variant="body2" color="textSecondary" component="p">
                    The Space Hippie 01 is the most “standard” shoe of the set, meaning it employs a conventional lacing system. 
                    The other three have easy-entry mechanisms, skewed arrangements, or no laces at all.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/nike-space-hippie-01-obisidan" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://launches.endclothing.com/product/nike-space-hippie-01-dj3056-400" style={{textDecoration: 'none'}}>  
                  <Button >
                    END
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
        </Grid>
        
        
        <Typography variant="h4" className={classes.May}>
          May
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card1}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>6</div>
                <CardMedia 
                className={classes.media4}
                />
                <CardContent>
                  <Typography className={classes.card4h} gutterBottom variant="h6" component="h2">
                    Jordan 11 Retro Low Bright Citrus
                  </Typography>
                  <div className={classes.price1}>
                  $231
                  </div>
                  <Typography className={classes.card4p} variant="body2" color="textSecondary" component="p">
                  The Air Jordan 11 Retro 'Citrus' features a monochromatic white low top upper and a matching patent leather wrap in white.
                  Additional hits on the tongue and heel branding bring more color to the design. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/air-jordan-11-retro-low-bright-citrus-w" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.goat.com/sneakers/air-jordan-11-retro-low-gs-580521-139" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card5}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>28</div>
                <CardMedia 
                className={classes.media5}
                />
                <CardContent>
                  <Typography className={classes.card5h} gutterBottom variant="h6" component="h2">
                    Jordan 3 Retro Rust Pink
                  </Typography>
                  <div className={classes.price1}>
                  $238
                  </div>
                  <Typography className={classes.card5p} variant="body2" color="textSecondary" component="p">
                  The titular Jordan Retro 3 “Rust Pink” dresses the nubuck upper in near entirety, contrasted by white leather 
                  tongues, eye stays, and a pop right at the collar. The silhouette’s signature Cement print is reinforced.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/air-jordan-3-retro-rust-pink-w" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.goat.com/sneakers/wmns-air-jordan-3-retro-rust-pink-ck9246-116" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card6}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>29</div>
                <CardMedia 
                className={classes.media6}
                />
                <CardContent>
                  <Typography className={classes.card6h} gutterBottom variant="h6" component="h2">
                    Jordan 4 Retro White Oreo
                  </Typography>
                  <div className={classes.price1}>
                  $238
                  </div>
                  <Typography className={classes.card6p} variant="body2" color="textSecondary" component="p">
                  The Air Jordan 4 “White Oreo” is an upcoming iteration of the popular silhouette and it’s notably inspired by the Air Jordan 4 “Oreo” but in whiteout version. 
                  The model sports a pristine tumbled leather and mesh construction.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/air-jordan-4-retro-white-oreo-2021" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://nxtdrop.com/product/air-jordan-4-retro-white-oreo" style={{textDecoration: 'none'}}>  
                  <Button >
                    nxtdrop
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
        </Grid>


        <Typography variant="h4" className={classes.June}>
          June
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card7}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>5</div>
                <CardMedia 
                className={classes.media7}
                />
                <CardContent>
                  <Typography className={classes.card7h} gutterBottom variant="h6" component="h2">
                    Jordan 6 Retro Electric Green
                  </Typography>
                  <div className={classes.price1}>
                  $238
                  </div>
                  <Typography className={classes.card7p} variant="body2" color="textSecondary" component="p">
                    The Air Jordan 6 Retro ‘Electric Green’ showcases a simplistic two-tone color scheme that calls to mind an Oregon PE colorway that surfaced online in 2018. 
                    The iconic silhouette sports a black nubuck upper.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                  <a href="https://stockx.com/air-jordan-6-retro-electric-green" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.goat.com/sneakers/air-jordan-6-retro-electric-green-ct8529-003" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card8}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>11</div>
                <CardMedia 
                className={classes.media8}
                />
                <CardContent>
                  <Typography className={classes.card8h} gutterBottom variant="h6" component="h2">
                    Nike Dunk High Game Royal
                  </Typography>
                  <div className={classes.price1}>
                  $150
                  </div>
                  <Typography className={classes.card8p} variant="body2" color="textSecondary" component="p">
                    The Nike Dunk High ‘Game Royal’ showcases classic color blocking on a traditional all-leather upper. 
                    The two-tone design is reminiscent of the OG ‘Kentucky’ colorway from Nike’s iconic ‘Be True to Your School’ pack.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://stockx.com/nike-dunk-high-game-royal" style={{textDecoration: 'none'}}>  
                  <Button >
                    StockX
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.goat.com/sneakers/dunk-high-game-royal-dd1399-102" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card9}>
              <CardActionArea>
              <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: 'Leckerli One',
                  fontWeight: "bold",
                  fontSize: 37,
                  borderRadius: 500,
                }}>21</div>
                <CardMedia 
                className={classes.media9}
                />
                <CardContent>
                  <Typography className={classes.card9h} gutterBottom variant="h6" component="h2">
                    Yeezy Boost 350 V2 Mono Mist
                  </Typography>
                  <div className={classes.price1}>
                  $275
                  </div>
                  <Typography className={classes.card9p} variant="body2" color="textSecondary" component="p">
                  The Adidas Yeezy Boost 350 V2 Mono Mist features a semi-translucent sheath upper with signature side stripes and rear pull tabs. 
                  The Mono Mist iteration opts for a Dark Grey base offset by the Light Grey accents.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className={classes.StoreS}>
                Store Select
                </div>
                <div className={classes.storebutton}>
                <a href="https://shop.kicksonfire.com/" style={{textDecoration: 'none'}}>  
                  <Button >
                    kicksonfire
                  </Button>
                  </a>
                </div>
                <div className={classes.storebutton}>
                <a href="https://www.goat.com/sneakers/yeezy-boost-350-v2-mono-mist-yzy-350-v2-mono-mist" style={{textDecoration: 'none'}}>  
                  <Button >
                    GOAT
                  </Button>
                  </a>
                </div>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h4" className={classes.Soon}>
          Stay tuned for more drops!
        </Typography>

        <ShoeContainer>
        <FireRedImg src={fireRedImgUrl} />
        </ShoeContainer>

        <Shoe2Container>
          <Jordan1Img src={airJordan1ImgUrl} />
        </Shoe2Container>

      </Container>
    );
}
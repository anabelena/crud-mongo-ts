import Pusher from "pusher";

//crea conexion entre front y back 

const pusher = new Pusher({
    appId: "1743713",
    key: "b1aedcc406bbfeb3cbd1",
    secret: "0ef593f149fb018950d1",
    cluster: "us2",
    useTLS: true
  });
  

  export default pusher;
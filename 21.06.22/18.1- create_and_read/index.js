import './app/db/mongoose.js'
import { app } from './app/app.js';



const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log('SERVER IS UP AND RUNNING ON PORT ' + PORT);
})
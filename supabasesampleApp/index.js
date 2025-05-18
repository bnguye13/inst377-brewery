const express = require("express");
const supabaseClient = require("@supabase/supabase-js");
const bodyParser = require("body-parser");
const { isValidStateAbbreviation } = require("usa-state-validator");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get("/brewery", async (req, res) => {
  console.log("Bringing in more business!");

  const { data, error } = await supabase.from("brewery").select();

  if (error) {
    console.log(`Error: ${error}`);
    res.statusCode = 500;
    res.send(error);
  }

  res.send(data);
});

app.post("/brewery", async (req, res) => {
  console.log("Adding Brewery");

  console.log(req.body);
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;

  if (!isValidStateAbbreviation(state)) {
    console.log(`State ${state} is Invalid`);
    res.statusCode = 400;
    res.header("Content-Type", "application/json");
    var errorJson = {
      message: `${state} is not a Valid State`,
    };
    res.send(JSON.stringify(errorJson));
    return;
  }

  const { data, error } = await supabase
    .from("brewery")
    .insert({
      brewery_name: name,
      brewery_city: city,
      brewery_state: state,
    })
    .select();

  if (error) {
    console.log(`Error: ${error}`);
    res.statusCode = 500;
    res.send(error);
  }

  res.send(data);
});

app.listen(port, () => {
  console.log("App is Working", port);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const Web3 = require('web3');
const contract = require('@truffle/contract');
const VotingArtifact = require('./build/contracts/Voting.json');

const app = express();
app.use(cors()); // Add this line
app.use(bodyParser.json());

const web3 = new Web3('http://localhost:8545');
const Voting = contract(VotingArtifact);
Voting.setProvider(web3.currentProvider);

let votingInstance;

Voting.deployed().then(instance => {
    votingInstance = instance;
});

app.post('/register', (req, res) => {
  res.send('Registration endpoint');
});

app.post('/login', (req, res) => {
  res.send('Login endpoint');
});

app.post('/vote', async (req, res) => {
  const { candidateId, account } = req.body;
  if (!candidateId || !account) {
    return res.status(400).send('Missing candidateId or account');
  }
  try {
    await votingInstance.vote(candidateId, { from: account });
    const candidatesCount = await votingInstance.candidatesCount();
    let candidates = [];
    for (let i = 1; i <= candidatesCount; i++) {
      const candidate = await votingInstance.candidates(i);
      candidates.push(candidate);
    }
    res.json(candidates);
  } catch (error) {
    res.status(400).send('Error voting: ' + error.message);
  }
});

app.get('/candidates', async (req, res) => {
  try {
    const candidatesCount = await votingInstance.candidatesCount();
    let candidates = [];
    for (let i = 1; i <= candidatesCount; i++) {
      const candidate = await votingInstance.candidates(i);
      candidates.push(candidate);
    }
    res.json(candidates);
  } catch (error) {
    res.status(400).send('Error fetching candidates: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

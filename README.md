---

# Blockchain Voting System

## Overview
This project is a decentralized voting system built using blockchain technology. The purpose of this system is to provide a secure, transparent, and tamper-proof voting mechanism. The project uses Ethereum smart contracts to manage the voting process and uses a web interface for interaction.

## Project Structure
- **contracts/**: Contains the Solidity smart contract for the voting system.
- **migrations/**: Contains migration scripts for deploying smart contracts.
- **voting-client/**: Contains the React application for the user interface.
- **server.js**: Node.js server for handling backend requests.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- Truffle framework installed globally (`npm install -g truffle`)
- Ganache for local blockchain development

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blockchain-voting-system.git
   cd blockchain-voting-system
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install
   ```

## Usage
1. Start Ganache:
   ```bash
   ganache-cli
   ```

2. Deploy the smart contract:
   ```bash
   truffle migrate
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```

4. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3001` to access the voting interface.

## Known Issues
- **Frontend-Backend Configuration**: We are currently facing issues with the frontend and backend integration. The smart contract works correctly, but we are unable to fully deploy the system due to configuration issues. 

## Future Improvements
- Fix frontend-backend integration issues to enable full deployment.
- Add more features such as admin panel, candidate registration, and voting analytics.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Authors
- Galaxy Rawat
- Nishchya Pratap Singh
- Saarthak Srivastava


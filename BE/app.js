const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const DB = require('./config/database')
const History = require('./schema/history')

app.get('/getHistory', (req, res) => {
	const query = req.query
	let filter = {};

	if(query.type == 'date' && query.value !='') {
		var a = query.value+'T00:00:00.000Z'
		var b = query.value+'T23:59:59.999Z'

		filter = {
			createdDate:{
				$gte: a, 
				$lt: b
			}
		}
	} else if(query.type == 'operation' && query.value !='') {
		filter = {
			operation: query.value
		}
	}

	History.find(filter, null, (error, docs) => {
		if(error){
			res.status(500).json({status: false, data: 'Something went wrong'});
		} else {
			res.status(200).json({status: true, data: docs});
		}
	})
})

app.post('/saveHistory', (req, res) => {
	console.log(req.body);
	let data = req.body
	let newData = new History(data)
	newData.save((error, docs) => {
		if(error){
			res.status(500).json({status: false, message: 'Something went wrong'});
		} else {
			res.status(200).json({status: true, message: 'Your message is saved correctly.'});
		}
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
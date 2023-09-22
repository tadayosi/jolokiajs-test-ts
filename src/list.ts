import Jolokia from 'jolokia.js'
import 'jolokia.js/simple'

const jolokiaUrl = 'http://localhost:10001/actuator/hawtio/jolokia'

const jolokia = new Jolokia(jolokiaUrl)
const list = jolokia.list()
console.log('List:', list)

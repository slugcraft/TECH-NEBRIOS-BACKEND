import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 50 },   // sube a 50 usuarios en 10 segundos
        { duration: '30s', target: 50 },   // mantiene 50 usuarios por 30 segundos
        { duration: '10s', target: 0 },    // baja gradualmente
    ],
};

export default function () {
    let res = http.get('http://localhost:3000/stress_test');
    
    check(res, {
        'status es 200': (r) => r.status === 200,
        'status es 404': (r) => r.status === 404,
        'respuesta < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}
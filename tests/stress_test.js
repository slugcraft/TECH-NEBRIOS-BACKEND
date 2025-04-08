import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 20 },
        { duration: '10s', target: 30 },
        { duration: '10s', target: 40 },
        { duration: '10s', target: 50 },
        { duration: '5s', target: 50 },
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
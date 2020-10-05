import { Time } from '@angular/common';

export class AppointmentBooking {
    
    public hospitalId : number;
    public doctorId: number;
    public stime:  Time;
    public etime: Time;
    public date: Date;
    public emailId: string;
}
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


declare var toastr: any;
@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	constructor(private toastr:ToastrService) {}

	showSuccess (title, msg) {
		this.toastr.success(msg, title);
	}
	showinfo(title, msg) {
		this.toastr.info(msg, title);
	}
	warning(title, msg) {
		this.toastr.warning(msg, title);
	}
	error(title, msg) {
		this.toastr.error(msg, title);
	}

	wait(title, msg) {
		this.toastr.info(msg, title, { timeOut: 30000000 });
	}
}
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE subscriptionBaseService PLEASE EDIT ../subscription.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Subscription } from '../../domain/angulartest_db/subscription';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../subscription.service.ts
 */

/*
 * SCHEMA DB subscription
 *
	{
		customer_id: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		customer_id: {
			type: Schema.ObjectId,
			ref : "subscription"
		},
	}
 *
 */
@Injectable()
export class SubscriptionBaseService {

    private subscriptionCollection: AngularFirestoreCollection<Subscription>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.subscriptionCollection = afs.collection<Subscription>('subscription');
    }


    // CRUD METHODS


    // Custom APIs

}

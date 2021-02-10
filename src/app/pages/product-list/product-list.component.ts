import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { ProductService } from '../../services/product.service';
// Import Models
import { Product } from '../../domain/angulartest_db/product';

// START - USED SERVICES
/**
* productService.list
*	@description CRUD ACTION list
*
* productService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Product
 * @class ProductListComponent
 */
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private productService: ProductService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.productService.list();
    }

    /**
     * Select Product to remove
     *
     * @param {string} id Id of the Product to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Product
     */
    deleteItem() {
        this.productService.remove(this.idSelected);
    }

}

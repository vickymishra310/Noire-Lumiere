import { ShoppingCart, X, Plus, Minus, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import * as XLSX from 'xlsx';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Prepare data for Excel
    const orderData = items.map((item, index) => ({
      'S.No': index + 1,
      'Product Name': item.name,
      'Brand': item.brand,
      'Price': item.price,
      'Quantity': item.quantity,
      'Total Price': `$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`,
      'Category': item.category || 'Fragrance',
      'Notes': item.notes ? item.notes.join(', ') : 'N/A'
    }));

    // Add summary row
    const summaryRow = {
      'S.No': '',
      'Product Name': 'TOTAL',
      'Brand': '',
      'Price': '',
      'Quantity': getCartCount(),
      'Total Price': getCartTotal(),
      'Category': '',
      'Notes': ''
    };

    const finalData = [...orderData, summaryRow];

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(finalData);

    // Set column widths
    ws['!cols'] = [
      { wch: 8 },  // S.No
      { wch: 25 }, // Product Name
      { wch: 15 }, // Brand
      { wch: 12 }, // Price
      { wch: 10 }, // Quantity
      { wch: 15 }, // Total Price
      { wch: 12 }, // Category
      { wch: 30 }  // Notes
    ];

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Order Details');

    // Generate filename with current date
    const now = new Date();
    const filename = `Luxury_Perfume_Order_${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}.xlsx`;

    // Download the file
    XLSX.writeFile(wb, filename);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {getCartCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-luxury text-2xl">Shopping Cart</SheetTitle>
          <SheetDescription>
            {getCartCount() === 0 ? 'Your cart is empty' : `${getCartCount()} item${getCartCount() > 1 ? 's' : ''} in your cart`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                      <p className="text-sm font-semibold text-foreground">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-primary">{getCartTotal()}</span>
                </div>
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/95 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Order & Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
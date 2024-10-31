# Template Nuxt Project

Template ini mencakup pembuatan crud, penggunaan component, serta pemanfaatan persist state untuk mengambil data dari local storage dan juga cookie



## Folder

### Helpers
helpers digunakan untuk menyimpan variable dan function yang akan digunakan secara global dan berulang, sehingga diingatkan untuk melakukan export function dan export variable di helpers. Untuk function, diusahakan 1 file helpers memiliki 1 function agar mempermudah keterbacaan

### Components
Untuk pembuatan komponen, pisahlah dari penggunaan layout lalu ke page dan component. apabila komponent bersifat general, boleh di buat di luar file

### Types
Folder ini digunakan untuk menyimpan tipe data atau interface dari project untuk mengurangi error dan membuat project menjadi lebih rapi

### Stores
Stores digunakan untuk menyimpan function master data (create, read, update, delete). Store dibuat dengan **pinia**. Untuk Login ditambahakan dengan **persisted state** untuk menyimpan data login

### Middleware
Digunakan untuk menyimpan validasi sebelum memasuki route

### Layouts
Digunakan untuk membuat layout pada page


## Notes

### Pembuatan CRUD
Pembuatan function crud dilakukan dalam folder storage. Pembuatan CRUD membutuhkan api endpoint dari env yang bernama **API_ENDPOINT** dan header authorization agar api tidak memberikan return **401**

#### Contoh ENV
``` 
API_ENDPOINT = 'http://localhost:8000/api/v1/' 
```
#### Headers
``` 
headers: {'Authorization': `Bearer ${auth.loginOutput.data.token}`}
```

### Pembuatan Component
Component dibuat ketika suatu elemen digunakan lebih dari sekali, memiliki kemiripan satu sama lainnya dan elemen tersebut terlalu panjang. Seperti button, card, section , dan lainnya. Untuk pembuatan komponen, manfaatkan props dan emit untuk membuat komponen lebih reusable.

### Styling
# **GUNAKAN TAILWIND CSS DAN TAILWIND APPLY :D**
## List Package

- Prime vue ver 3 => Styling Component
- Pinia => State Management
- Pinia Persisted State => Save state on web storage
- Font Awesome => Font
- Full Calendar => Calendar
- Vue Awesome Paginate => Pagination
- Chart Js => Chart
- Quill Editor => Rich Text Editor

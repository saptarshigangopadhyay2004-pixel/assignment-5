# Online Shopping Cart

A React (Vite) shopping cart built with **useReducer + Context API** for state management.

## Features
- Product list (8 sample products)
- Add to cart
- Remove item
- Quantity update (+ / − buttons, auto-removes at 0)
- Coupon code (`SAVE10`, `SAVE20`, `WELCOME50`) — reduces cart price by a percentage
- GST calculation (18%) applied after discount
- Grand total breakdown (Subtotal → Discount → GST → Grand Total)

## Project structure
```
shopping-cart/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── products.js
    ├── reducer/
    │   └── cartReducer.jsx      # useReducer actions + logic
    ├── context/
    │   └── CartContext.jsx      # Context API provider + useCart hook
    └── components/
        ├── ProductList.jsx
        ├── Cart.jsx
        ├── CartItem.jsx
        ├── CouponForm.jsx
        └── GrandTotal.jsx
```

## Run locally
```bash
npm install
npm run dev
```
Then open the printed localhost URL.

## Deploy: GitHub + Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Online shopping cart"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Log in to [Netlify](https://app.netlify.com) → **Add new site → Import an existing project**.
   - Connect your GitHub repo.
   - Build settings (already set in `netlify.toml`, but confirm):
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click **Deploy site**. Netlify will install dependencies, run the build, and give you a live URL.

That's it — every push to `main` will auto-redeploy.

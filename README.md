# Nancy Agarwal — Portfolio

Local React portfolio (Vite + Tailwind + Motion). **Do not deploy until the UI is approved.**

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Contact form

Submissions are stored in `data/messages.json` (local database).

Email notification uses [Web3Forms](https://web3forms.com) if `WEB3FORMS_ACCESS_KEY` is set in `.env`, otherwise [FormSubmit](https://formsubmit.co) to `nancyagarwal9023@gmail.com` (confirm the first email).

Optional [Supabase](https://supabase.com): run `supabase/schema.sql`, then set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

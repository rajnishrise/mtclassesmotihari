# MT Classes, Motihari — Website

Website for **MT Classes** (Maths & Science, Classes 8–10, CBSE). Plain HTML, CSS and JavaScript — no build step, free to host on GitHub Pages.

| Page | What it does |
|---|---|
| `index.html` | Home: courses, board-exam countdown, notice board, FAQ |
| `classes.html` | Batch timings, weekly schedule, live-class link |
| `notes.html` | Chapter-wise notes (PDF links) and quick-revision notes that open on the site |
| `videos.html` | YouTube lessons (loads the player only when tapped) |
| `exam.html` | Timed MCQ tests, instant score, solutions, WhatsApp share |
| `attendance.html` | Teacher marks attendance; parents check with roll number + code |
| `contact.html` | Admission enquiry (sent on WhatsApp), map, optional UPI fee card |

Also included: dark mode, installable as a phone app (PWA), mobile-first design.

## 1. Put it online (GitHub Pages)

1. Create a new **public** repository on GitHub, e.g. `mt-classes`.
2. Upload **everything inside this folder** (keep the folder structure). On a computer: *Add file → Upload files* and drag all files and folders in.
3. Go to **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, choose branch `main` and folder `/ (root)`, then **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/mt-classes/`.

Or with git:

```bash
git init && git add . && git commit -m "MT Classes website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mt-classes.git
git push -u origin main
```

## 2. Put in your own details

Everything you need to edit is in the **`data/`** folder:

| File | Edit this for |
|---|---|
| `data/config.js` | Phone, WhatsApp number, address, YouTube channel, live-class link, UPI ID, board-exam date |
| `data/content.js` | Batches and timings, notices, FAQ, toppers, reviews |
| `data/notes.js` | Chapter lists, PDF links, quick-revision notes |
| `data/videos.js` | YouTube video IDs |
| `data/questions.js` | Online-test questions |

**Sample values to replace before going live:** phone and WhatsApp number, batch timings, notices.
Toppers and reviews are empty on purpose — add real ones and those sections appear automatically.
Class 9 and Class 8 Science chapter lists are short placeholders (new NCERT books) — add your own chapter list.

## 3. Make attendance and results truly online (Google Sheets, free)

Without this step the site runs in **demo mode**: attendance and results are saved only on the device used.

1. Create a new Google Sheet (e.g. "MT Classes Data").
2. **Extensions → Apps Script**. Delete the sample code, paste everything from `backend/Code.gs`, and save.
3. Choose the function **`setup`** in the toolbar and click **Run** (allow the permissions). This creates four tabs: Students, Attendance, Results, Enquiries.
4. **Project Settings (gear icon) → Script properties** → change `TEACHER_PIN` to your own secret PIN (6+ characters).
5. **Deploy → New deployment → type: Web app** → *Execute as: Me*, *Who has access: Anyone* → **Deploy**. Copy the web-app URL.
6. Paste that URL into `backendUrl` in `data/config.js` and upload the file again.
7. Fill the **Students** tab: `Roll | Name | Class | Batch | Code | Phone`.
   - `Batch` must match a batch `id` from `data/content.js` (`C8`, `C9`, `C10`). For two batches write `C10,C9`.
   - `Code` is the private code a parent types to see attendance (for example the last 4 digits of their phone number).

If you change `Code.gs` later, use **Deploy → Manage deployments → Edit → New version**.

## Good to know

- **Student privacy:** never put real student names or phone numbers in this repository — it is public. Keep them only in the Google Sheet. `data/students-demo.js` contains made-up demo entries.
- **Online tests are for practice.** The answers are inside `data/questions.js`, which a curious student can open. For marked exams use a supervised test.
- **Demo teacher PIN** (`1234` in `config.js`) is only for demo mode and is visible to everyone. In online mode the real PIN lives in Apps Script and is never in this repository.
- **Custom domain:** in *Settings → Pages* add your domain; GitHub creates the `CNAME` file for you.
- Colours are set at the top of `assets/css/style.css` (navy and gold).

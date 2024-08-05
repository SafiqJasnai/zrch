## Getting Started

### Step 1: Clone the Repository

First, clone this repository to your local machine using:

```bash
git clone https://github.com/SafiqJasnai/zrch.git
cd zrch
```

### Step 2: Create Your .env.local File

Next, create a .env.local file in the root of your project. Use the provided .env.local.example as a template.

```bash
cp .env.local.example .env.local
```

Open .env.local and add your Google Client ID and Secret:

```makefile
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=secure_nextauth_secret
```

### Step 3: Install the Packages

Install all the dependencies by running:

```bash
npm install
```

### Step 4: Run the Development Server

Finally, start the development server:

```bash
npm run dev
```

Now, open http://localhost:3000 in your browser to see your app in action!

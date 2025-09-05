# Martial Arts Literature Website

The martial arts repository is a static HTML educational website providing comprehensive information about martial arts libraries, literature, publishers, and resources. The website serves as an authoritative guide for researchers, practitioners, and historians interested in martial arts documentation and scholarly resources.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Repository Structure
- **Root Directory**: `/home/runner/work/martial_arts/martial_arts/`
- **Main Files**:
  - `index.html` - Primary comprehensive guide (110KB)
  - `martial_arts_industry_trends.html` - Industry trends page with visualizations (30KB)
  - `README.md` - Detailed content source material (78KB)
  - `LICENSE` - License file

### Technology Stack
- **Static HTML/CSS/JavaScript only** - No build process required
- **TailwindCSS** - Via CDN (`https://cdn.tailwindcss.com`)
- **Chart.js** - Via CDN (`https://cdn.jsdelivr.net/npm/chart.js`) for data visualizations
- **Google Fonts** - Inter font family via CDN
- **No package.json, no dependencies, no build tools**

### Development Setup and Testing
Run these commands to set up and test the website:

1. **Navigate to repository root**:
   ```bash
   cd /home/runner/work/martial_arts/martial_arts
   ```

2. **Start local development server**:
   ```bash
   python3 -m http.server 8000
   ```
   - **Expected behavior**: Server starts immediately and serves on port 8000
   - **Access URLs**: 
     - Main page: `http://localhost:8000/index.html`
     - Trends page: `http://localhost:8000/martial_arts_industry_trends.html`

3. **Validate HTML syntax**:
   ```bash
   python3 -c "
   import html.parser
   class HTMLValidator(html.parser.HTMLParser):
       def __init__(self):
           super().__init__()
           self.errors = []
       def error(self, message):
           self.errors.append(message)
   
   with open('index.html', 'r', encoding='utf-8') as f:
       content = f.read()
       
   parser = HTMLValidator()
   try:
       parser.feed(content)
       print('index.html: Valid HTML structure')
   except Exception as e:
       print(f'index.html: Error - {e}')
   "
   ```

4. **Test website accessibility**:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/index.html
   ```
   - **Expected output**: `200` (HTTP OK)

5. **Verify content structure**:
   ```bash
   curl -s http://localhost:8000/index.html | grep -c "<h[1-6]"
   ```
   - **Expected output**: `51` (heading elements)

### Validation Scenarios

**ALWAYS manually validate any changes by running through these complete scenarios:**

1. **Primary Content Validation**:
   - Start the HTTP server: `python3 -m http.server 8000`
   - Access `http://localhost:8000/index.html`
   - Verify the page loads completely
   - Check that TailwindCSS styling is applied (text should be styled, not plain HTML)
   - Navigate through all 7 main sections using the sticky navigation
   - Verify all tables display properly with borders and formatting
   - Test responsive design by resizing the browser window

2. **Industry Trends Page Validation**:
   - Access `http://localhost:8000/martial_arts_industry_trends.html`
   - Verify Chart.js visualizations render (5 charts expected)
   - Check that all charts are interactive (hover effects, legends)
   - Verify responsive layout on different screen sizes

3. **Content Integrity Validation**:
   - Verify all internal anchor links work (navigation menu items)
   - Check that external links are properly formatted (but don't test access - CDN restrictions apply)
   - Ensure all images and media load correctly
   - Validate that tables are properly formatted and readable

## Common Tasks

### Making Content Changes
- **Direct HTML editing** - Edit the HTML files directly using a text editor
- **No compilation required** - Changes are immediately visible when refreshing the browser
- **Always validate** HTML syntax after making changes using the validation script above

### Testing Changes
- **Always restart the HTTP server** after making file changes:
  ```bash
  # Stop current server (Ctrl+C) then restart:
  python3 -m http.server 8000
  ```
- **Clear browser cache** when testing changes
- **Test on multiple screen sizes** to ensure responsive design works

### External Dependencies
The website uses CDN-based dependencies. In development environments with internet restrictions:
- **TailwindCSS may not load** - Styling will appear as plain HTML
- **Chart.js may not load** - Visualizations will not render on trends page
- **Google Fonts may not load** - Will fallback to system fonts
- **This is expected behavior** in sandboxed environments
- **Website functionality remains intact** even without CDN access

### File Structure Understanding
```
martial_arts/
├── .github/
│   └── copilot-instructions.md (this file)
├── .git/ (version control)
├── index.html (main page - comprehensive guide)
├── martial_arts_industry_trends.html (trends/visualizations page)
├── README.md (source content - 78KB text)
└── LICENSE (license file)
```

### Timing Expectations
- **Server startup**: Immediate (< 1 second)
- **Page load**: Immediate for local files
- **HTML validation**: < 1 second
- **File edits**: No compilation time - changes are instant
- **NEVER CANCEL any commands** - All operations complete quickly

### Content Overview
The website covers:
- **Section 1**: Introduction to martial arts literature
- **Section 2**: Libraries & archives (physical and digital)
- **Section 3**: Publishers and publishing ecosystem
- **Section 4**: Academic journals and scholarship
- **Section 5**: Curated book compendium
- **Section 6**: Building a martial arts library
- **Section 7**: Conclusion and future directions

### Key External Links Referenced
The website references but does not directly link to:
- Wiktenauer (HEMA manuscripts)
- University of Michigan Library
- Kodokan Judo Museum & Library
- Various martial arts publishers
- Academic journals and databases

**Important**: These are referenced for informational purposes. The website itself is self-contained.

## Critical Notes
- **No build process exists or is needed**
- **No package managers** (npm, pip, etc.) are used
- **No testing frameworks** - manual validation only
- **CDN dependencies may be blocked** in restricted environments (this is normal)
- **Website works offline** except for external font and styling CDNs
- **Content is static** - no databases or dynamic content
- **No server-side processing** required

## Troubleshooting
If the website doesn't display correctly:
1. Check that the HTTP server is running on port 8000
2. Verify HTML syntax using the validation script
3. Clear browser cache and reload
4. Check browser console for any JavaScript errors
5. Verify file permissions allow reading HTML files

For content issues:
1. Ensure HTML structure is valid
2. Check that all opening tags have closing tags
3. Verify TailwindCSS classes are properly applied
4. Test on a different browser if styling issues occur

**The website should work perfectly as a static HTML site even without internet access for CDN resources.**
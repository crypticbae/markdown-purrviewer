# Multi-Page A4 Document Demo

This document demonstrates the **new multi-page A4 format** that creates separate pages like Microsoft Word!

## Features of Multi-Page A4 Format

- 📄 **Automatic Page Breaks**: Content automatically flows to new pages
- 📖 **Page Numbering**: Each page shows its number at the bottom
- 📏 **Standard A4 Size**: Each page is exactly 210mm × 297mm
- 🖨️ **Print Perfect**: Each page prints as a separate sheet
- ✂️ **Manual Page Breaks**: Use `---PAGE-BREAK---` to force new pages

## How It Works

The system calculates the available content height on each A4 page (considering margins) and automatically creates new pages when content would overflow. This gives you a true document experience!

### Page Layout Details

- **Page Size**: 794px × 1123px (A4 at 96 DPI)
- **Margins**: 94px (≈25mm) on all sides
- **Content Area**: 606px × 935px per page
- **Typography**: Professional Times New Roman font
- **Line Height**: 1.6 for optimal readability

## Long Content Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

### Code Example

```javascript
function createMultiPageDocument() {
    const pages = [];
    let currentPage = new A4Page();
    
    content.forEach(element => {
        if (currentPage.canFit(element)) {
            currentPage.add(element);
        } else {
            pages.push(currentPage);
            currentPage = new A4Page();
            currentPage.add(element);
        }
    });
    
    return pages;
}

// This function demonstrates how the pagination works
console.log("Each page maintains proper A4 dimensions!");
```

### Mathematical Expressions

The quadratic formula is one of the most fundamental equations in algebra:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

When $a \ne 0$, this formula provides the solutions to any quadratic equation of the form $ax^2 + bx + c = 0$.

### Lists and Organization

1. **First Major Point**
   - Supporting detail one
   - Supporting detail two
   - Supporting detail three

2. **Second Major Point**
   - Another supporting detail
   - More information here
   - Additional context

3. **Third Major Point**
   - Final supporting details
   - Conclusion points
   - Summary information

### Table Example

| Feature | Description | Status |
|---------|-------------|--------|
| Auto Page Breaks | Automatic content overflow handling | ✅ Complete |
| Manual Page Breaks | User-controlled page boundaries | ✅ Complete |
| Page Numbering | Sequential page numbers | ✅ Complete |
| Print Optimization | Perfect printing support | ✅ Complete |
| Responsive Design | Mobile-friendly adaptation | ✅ Complete |

---PAGE-BREAK---

# Manual Page Break Demo

This content appears on a **new page** because we used `---PAGE-BREAK---` above!

## When to Use Manual Page Breaks

- Before important new sections
- To separate different topics
- To control page layout precisely
- For better visual organization

### More Content to Fill Pages

This section contains enough content to demonstrate how the system handles multiple pages automatically. As you type more content, you'll see new pages created dynamically.

> **Tip**: Toggle A4 format on and off to see the difference between continuous and paginated layouts!

### Large Content Blocks

Sometimes you might have content that's quite large:

```python
def demonstrate_large_code_block():
    """
    This is a larger code block that might need special handling
    in the pagination system. The system is designed to handle
    such cases gracefully.
    """
    
    # Complex algorithm example
    for i in range(100):
        for j in range(100):
            result = complex_calculation(i, j)
            if result > threshold:
                process_result(result)
                
    # More code to make this block larger
    data_structure = {
        'key1': 'value1',
        'key2': 'value2',
        'key3': 'value3',
        'key4': 'value4',
        'key5': 'value5'
    }
    
    return data_structure

# Function calls
result = demonstrate_large_code_block()
print(f"Processing complete: {result}")
```

## Benefits of Multi-Page Layout

### Professional Appearance
The multi-page layout gives your documents a professional, book-like appearance that's perfect for:
- Reports and presentations
- Academic papers and theses
- Technical documentation
- Business proposals
- Legal documents

### Print Compatibility
Each page is designed to print perfectly on standard A4 paper, making it easy to create physical documents that look exactly like the digital version.

### Better Organization
The page-based layout helps readers navigate long documents more easily, with clear visual boundaries between sections.

---

**That's it!** You now have a powerful multi-page A4 formatter that works just like Microsoft Word, but for Markdown! 🎉 
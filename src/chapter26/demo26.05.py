from bs4 import BeautifulSoup
html = '''
<html>
    <head><title>index</title></head>
    <body>
        <a href='a.html'>first page</a>
        <p>
        <a href='b.html'>second page</a>
        <p>
        <a href='c.html'>third page</a>
        <p>
        <x k='123'>hello</x>
    </body>
</html>
'''
soup = BeautifulSoup(html,'lxml')
print(soup.a)
print(soup.body.a)
print(soup.a.string)
# ----设置节点名称------
soup.a.name = 'div'
print(soup.x)
print('--------')
print(soup.x.string)

soup.x.string = 'word'
print(soup.x)

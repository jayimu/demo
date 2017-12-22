from collections import deque

q = deque(range(10))
print(q)
q.append(100)
q.append(-100)
print(q)
q.appendleft(20)
print(q)
print(q.pop())
print(q)
print(q.popleft())
print(q)
q.rotate(-2)
print(q)
q.rotate(4)
print(q)
q1 = deque(['a','b'])
q.extend(q1)
print(q)
q.extendleft(q1)
print(q)

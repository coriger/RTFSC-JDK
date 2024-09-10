package test;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class ProxyTest {

    public static void main(String[] args) {
            System.out.println("Proxy Test");
    }

}

class TimeHandler implements InvocationHandler{

    private Object target;

    public TimeHandler(Object target) {
        super();
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        long start = System.currentTimeMillis();
        method.invoke(target, args);
        long end = System.currentTimeMillis();
        System.out.println("Time taken: " + (end - start));
        return null;
    }
}

interface StudentService{
    void study();
}

class StudentServiceImpl implements StudentService{
    @Override
    public void study() {
        System.out.println("Student is studying");
    }
}
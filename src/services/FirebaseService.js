import { firebaseDatabase } from '../util/firebaseUtils';

export default class FirebaseService {
    static getDataList = (nodePath, callback, size=10) => {
        let query = firebaseDatabase.ref(nodePath)
            .limitToLast(size);
        
        query.on('value', datasnapshot => {
            let items= [];
            datasnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            })
            callback(items);
        });
        return query;
    };

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static remove = (nodePath, id) => {
        return firebaseDatabase.ref(nodePath + '/' + id).remove();
    }
}